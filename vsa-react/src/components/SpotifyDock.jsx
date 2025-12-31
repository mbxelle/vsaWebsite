export default function SpotifyDock() {
  return (
    <div className="spotify-dock" aria-label="Spotify playlist player">
      <iframe
        className="spotify-dock__player"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/1zei7OUZhfEQCUX8KM2coy?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="TMVSA Spotify Playlist"
      />
    </div>
  );
}
