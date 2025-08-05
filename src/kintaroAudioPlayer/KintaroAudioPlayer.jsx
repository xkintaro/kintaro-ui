import './kintaroAudioPlayer.css';

import { useState, useEffect, useRef } from 'react';
import {
    FaPlay,
    FaPause,
    FaStepForward,
    FaStepBackward,
    FaVolumeUp,
    FaVolumeMute,
    FaList,
    FaMinus,
    FaRedo,
    FaRandom,
    FaMusic
} from 'react-icons/fa';

import KintaroTitle3 from '../kintaroTitle3/KintaroTitle3';

const KintaroAudioPlayer = ({
    playerTitle = 'Music Player',
    audioBasePath = '/audio/',
    imageBasePath = '/images/',
    songs = [],
}) => {

    const audioRef = useRef(null);
    const savedTime = useRef(0);
    const previousVolume = useRef(0.5);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [progress, setProgress] = useState(0);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffled, setIsShuffled] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [audioError, setAudioError] = useState(false);
    const [isPlayerVisible, setIsPlayerVisible] = useState(false);

    const toggleLooping = () => {
        if (!isLooping) {
            setIsLooping(true);
            setIsShuffled(false);
        } else {
            setIsLooping(false);
        }
    };

    const toggleShuffled = () => {
        if (!isShuffled) {
            setIsShuffled(true);
            setIsLooping(false);
        } else {
            setIsShuffled(false);
        }
    };

    useEffect(() => {
        if (audioRef.current && songs.length > 0) {
            audioRef.current.src = `${audioBasePath}${songs[currentSongIndex]?.file}`;
            audioRef.current.load();
            if (isPlaying) {
                const playPromise = audioRef.current.play();
                playPromise?.catch(error => {
                    console.error("Playback failed:", error);
                    setAudioError(true);
                });
            }
        }
    }, [currentSongIndex, songs]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.loop = isLooping;
        }
    }, [volume, isLooping]);

    useEffect(() => {
        if (audioRef.current) audioRef.current.muted = isMuted;
    }, [isMuted]);

    useEffect(() => {
        if (!audioRef.current || songs.length === 0) return;

        if (isPlaying && !isSeeking) {
            const playPromise = audioRef.current.play();
            playPromise?.catch(error => {
                console.error("Playback failed:", error);
                setAudioError(true);
                setIsPlaying(false);
            });
        } else if (!isPlaying) {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        setImageError(false);
        setAudioError(false);
    }, [currentSongIndex]);

    const updateTime = () => {
        if (!audioRef.current || isSeeking) return;
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        if (!isNaN(duration) && duration > 0) {
            setDuration(duration);
            setCurrentTime(currentTime);
            setProgress((currentTime / duration) * 100);
        }
    };

    const handleEnded = () => {
        savedTime.current = 0;
        if (!isLooping) {
            isShuffled ? handleShuffle() : handleNext();
        }
    };

    const handleProgressChange = (e) => {
        if (!audioRef.current || !duration) return;
        const newTime = (e.target.value / 100) * duration;
        setProgress(e.target.value);
        setCurrentTime(newTime);
        savedTime.current = newTime;
    };

    const handleSeekStart = () => {
        setIsSeeking(true);
        if (audioRef.current && isPlaying) {
            audioRef.current.pause();
        }
    };

    const handleSeekEnd = () => {
        setIsSeeking(false);
        if (audioRef.current) {
            audioRef.current.currentTime = savedTime.current;
            if (isPlaying) {
                const playPromise = audioRef.current.play();
                playPromise?.catch(error => {
                    console.error("Playback failed:", error);
                    setAudioError(true);
                    setIsPlaying(false);
                });
            }
        }
    };

    const handleNext = () => {
        if (songs.length === 0) return;
        savedTime.current = 0;
        setCurrentSongIndex(prev => (prev + 1) % songs.length);
    };

    const handlePrevious = () => {
        if (songs.length === 0) return;
        savedTime.current = 0;
        setCurrentSongIndex(prev => (prev - 1 + songs.length) % songs.length);
    };

    const handleShuffle = () => {
        if (songs.length < 2) return;
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === currentSongIndex && songs.length > 1);
        savedTime.current = 0;
        setCurrentSongIndex(newIndex);
    };

    const selectSong = (index) => {
        if (index < 0 || index >= songs.length) return;
        savedTime.current = 0;
        setCurrentSongIndex(index);
        setIsPlaying(true);
        setShowPlaylist(false);
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const togglePlayer = () => setIsPlayerVisible(!isPlayerVisible);
    const handlePlayerVisibility = () => setIsPlayerVisible(true);
    const handleMinimizePlayer = () => {
        setIsPlayerVisible(false);
        setShowPlaylist(false);
    }

    useEffect(() => {
        if (isPlayerVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isPlayerVisible]);

    return (
        <div className={`kintaro-audio-player ${isPlayerVisible ? 'fullscreen' : ''}`}>
            <audio
                ref={audioRef}
                onTimeUpdate={updateTime}
                onEnded={handleEnded}
                onLoadedMetadata={updateTime}
                onError={() => setAudioError(true)}
            />

            {!isPlayerVisible && (
                <div className="kintaro-audio-player-button" onClick={handlePlayerVisibility}>
                    <FaMusic />
                </div>
            )}

            {isPlayerVisible && (
                <>
                    <div className="kintaro-audio-player-overlay" onClick={handleMinimizePlayer}></div>
                    <div className="kintaro-audio-player-box">
                        <div className="kintaro-audio-player-box-header">
                            <KintaroTitle3>{playerTitle}</KintaroTitle3>
                            <button
                                onClick={handleMinimizePlayer}
                                className="kintaro-audio-player-control-button"
                                title="Kapat"
                            >
                                <FaMinus size={14} />
                            </button>
                        </div>

                        <div className="kintaro-audio-player-box-main">
                            <div className="kintaro-audio-player-box-main-left">
                                <div className="kintaro-audio-player-logo">
                                    {!imageError && songs[currentSongIndex]?.image ? (
                                        <img
                                            src={`${imageBasePath}${songs[currentSongIndex].image}`}
                                            alt={songs[currentSongIndex].title}
                                            className="kintaro-audio-player-album-image"
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (
                                        <FaMusic size={32} />
                                    )}
                                </div>
                            </div>

                            <div className="kintaro-audio-player-box-main-right">
                                <div className="kintaro-audio-player-song-info">
                                    <div className="kintaro-audio-player-song-info-details">
                                        <KintaroTitle3>{songs[currentSongIndex]?.title || 'Şarkı Seçilmedi'}</KintaroTitle3>
                                        <p className="song-artist">
                                            {songs[currentSongIndex]?.artist || 'Bilinmeyen Sanatçı'}
                                        </p>
                                    </div>
                                    <div className="kintaro-audio-player-extra-controls">
                                        <button
                                            onClick={toggleShuffled}
                                            className={`kintaro-audio-player-control-button ${isShuffled ? 'active' : ''}`}
                                            title="Rastgele çal"
                                        >
                                            <FaRandom size={16} />
                                        </button>
                                        <button
                                            onClick={toggleLooping}
                                            className={`kintaro-audio-player-control-button ${isLooping ? 'active' : ''}`}
                                            title="Döngü"
                                        >
                                            <FaRedo size={16} />
                                        </button>
                                        <button
                                            onClick={() => setShowPlaylist(!showPlaylist)}
                                            className={`kintaro-audio-player-control-button ${showPlaylist ? 'active' : ''}`}
                                            title="Play List"
                                        >
                                            <FaList size={16} />
                                        </button>
                                    </div>
                                </div>

                                {audioError && (
                                    <div className="kintaro-audio-player-error-message">
                                        Bu ses dosyası yüklenemedi. Lütfen farklı bir şarkı seçin.
                                    </div>
                                )}

                                <div className="kintaro-audio-player-progress-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={handleProgressChange}
                                        onMouseDown={handleSeekStart}
                                        onMouseUp={handleSeekEnd}
                                        onTouchStart={handleSeekStart}
                                        onTouchEnd={handleSeekEnd}
                                        className="kintaro-audio-player-progress-input"
                                    />
                                    <div className="kintaro-audio-player-progress-time-display">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>

                                <div className="kintaro-audio-player-controls">
                                    <div className="kintaro-audio-player-volume-container">
                                        <button
                                            onClick={() => {
                                                if (isMuted) {
                                                    setVolume(previousVolume.current || 0.5);
                                                } else {
                                                    previousVolume.current = volume;
                                                    setVolume(0);
                                                }
                                                setIsMuted(!isMuted);
                                            }}
                                            className="kintaro-audio-player-control-button"
                                            title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                                        >
                                            {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
                                        </button>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            value={volume}
                                            onChange={(e) => {
                                                const newVolume = parseFloat(e.target.value);
                                                setVolume(newVolume);
                                                if (newVolume === 0) {
                                                    setIsMuted(true);
                                                } else {
                                                    setIsMuted(false);
                                                    previousVolume.current = newVolume;
                                                }
                                            }}
                                            className="kintaro-audio-player-volume-slider"
                                        />
                                    </div>

                                    <div className="kintaro-audio-player-controls-main">
                                        <button
                                            onClick={handlePrevious}
                                            className="kintaro-audio-player-control-button"
                                            title="Önceki şarkı"
                                            disabled={songs.length === 0}
                                        >
                                            <FaStepBackward size={18} />
                                        </button>
                                        <button
                                            onClick={() => setIsPlaying(!isPlaying)}
                                            className="kintaro-audio-player-play-pause-button"
                                            title={isPlaying ? 'Durdur' : 'Oynat'}
                                            disabled={songs.length === 0}
                                        >
                                            {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
                                        </button>
                                        <button
                                            onClick={isShuffled ? handleShuffle : handleNext}
                                            className="kintaro-audio-player-control-button"
                                            title="Sonraki şarkı"
                                            disabled={songs.length === 0}
                                        >
                                            <FaStepForward size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {showPlaylist && (
                            <div className="kintaro-audio-player-playlist-container">
                                {songs.map((song, index) => (
                                    <div
                                        key={index}
                                        onClick={() => selectSong(index)}
                                        className={`kintaro-audio-player-playlist-item ${index === currentSongIndex ? 'active' : ''}`}
                                    >
                                        <span className="kintaro-audio-player-playlist-item-number">{index + 1}</span>
                                        <span className="kintaro-audio-player-playlist-item-title">{song.title}</span>
                                        {index === currentSongIndex && isPlaying && (
                                            <span className="kintaro-audio-player-playlist-item-indicator"></span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default KintaroAudioPlayer;