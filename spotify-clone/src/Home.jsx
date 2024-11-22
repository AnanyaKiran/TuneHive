import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

const Home = () => {
    const { playlists, loading } = useSelector((state) => state.spotify);

    if (loading) return <Loader />;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {playlists.map((playlist) => (
                <div key={playlist.id}>{playlist.name}</div>
            ))}
        </div>
    );
};

export default Home;
