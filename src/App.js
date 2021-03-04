import React from 'react';
import Simple from './component/Simple/Simple';
import WithPlaylist from './component/WithPlaylist/WithPlaylist';
import Unstyled from './component/Unstyled/Unstyled';
import CustomPlaylist from './component/CustomPlaylist/CustomPlaylist';
import Fixed from './component/Fixed/Fixed';

const rowStyle = {display: 'flex', marginTop: '40px'};
const playlistContainerStyle = {margin: 'auto'};

function App() {
  return (
    <div>
        <div style={rowStyle}>
            <div style={playlistContainerStyle}><Simple /></div>
            <div style={playlistContainerStyle}><WithPlaylist /></div>
        </div>
        <div style={rowStyle}>
            <div style={{...playlistContainerStyle, width: '320px'}}><Unstyled /></div>
            <div style={playlistContainerStyle}><CustomPlaylist /></div>
        </div>
        <Fixed />
    </div>
  );
}

export default App;
