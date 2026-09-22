'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Music2, Pause, Play } from 'lucide-react';

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  progress: number;
  duration: number;
  songUrl: string;
}

// =========================================================
// TO ENABLE REAL SPOTIFY DATA:
// 1. Go to https://developer.spotify.com/dashboard
// 2. Create an app, get Client ID + Client Secret
// 3. Get your Refresh Token (see README for guide)
// 4. Add to .env.local:
//    SPOTIFY_CLIENT_ID=xxx
//    SPOTIFY_CLIENT_SECRET=xxx
//    SPOTIFY_REFRESH_TOKEN=xxx
// 5. Uncomment the fetch below
// =========================================================

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

  // Demo data (replace with real API call once credentials are set)
  useEffect(() => {
    setTimeout(() => {
      // Simulated demo data — replace with fetch('/api/spotify') once configured
      setData({
        isPlaying: false,
        title: 'Not Playing',
        artist: 'Spotify',
        album: '',
        albumArt: '',
        progress: 0,
        duration: 100,
        songUrl: 'https://spotify.com',
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 16,
        padding: '1.25rem',
        border: '1px solid var(--border-color)',
        height: '100%',
        minHeight: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Loading...</div>
      </div>
    );
  }

  const progressPct = data ? (data.progress / data.duration) * 100 : 0;

  return (
    <motion.a
      href={data?.songUrl || 'https://spotify.com'}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.01 }}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: 'var(--bg-card)',
        borderRadius: 16,
        padding: '1.25rem',
        border: '1px solid var(--border-color)',
        height: '100%',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Music2 size={14} color="#1DB954" />
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Now Playing
          </span>
        </div>
        {/* Spotify icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DB954">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </div>

      {/* Song info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Album art or placeholder */}
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 10,
          background: data?.albumArt
            ? `url(${data.albumArt}) center/cover`
            : 'linear-gradient(135deg, #1DB954, #191414)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {!data?.albumArt && (
            data?.isPlaying
              ? <Pause size={18} color="white" />
              : <Play size={18} color="white" />
          )}
        </div>

        <div style={{ overflow: 'hidden', flex: 1 }}>
          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: 'var(--text-primary)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {data?.isPlaying ? data.title : 'Not Playing'}
          </p>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {data?.isPlaying ? data.artist : 'Spotify'}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      {data?.isPlaying && (
        <div style={{
          marginTop: '0.875rem',
          height: 3,
          background: 'var(--border-color)',
          borderRadius: 999,
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            style={{
              height: '100%',
              background: '#1DB954',
              borderRadius: 999,
            }}
          />
        </div>
      )}
    </motion.a>
  );
}
