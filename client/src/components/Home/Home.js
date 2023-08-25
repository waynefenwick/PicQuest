import React from 'react';

function Home() {
     return (
          <div id="home" className="section">
               <b><i><p className="welcome">Welcome to PicQuest!</p></i></b>
               <p className="regular-p">&nbsp;&nbsp;You're out on a quest searching great pics for your project</p>
               <p className="regular-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You've arrived at the right site!</p>
               <p className="regular-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for just the right pic you are wanting...find it...and download it</p>
               <p className="regular-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add your own professional pics</p>
               <p className="regular-p">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enjoy your PicQuest!</p>
               <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
               </div>
          </div>
     );
}

export default Home;
