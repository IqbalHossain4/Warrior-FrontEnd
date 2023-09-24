import React, { useState } from 'react';
import useHakaton from '../../hooks/useHakaton';
import HakatonNavDetail from './HakatonNavDetail';
import Pagination from './Pagination';

const HakatonNav = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [hakatons, loading] = useHakaton();

  const lastPageIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPageIndex - postsPerPage;
  const currentPosts = hakatons.slice(firstPostIndex, lastPageIndex);

  return (
    <div>
      <div className='grid md:grid-cols-3'>
        {currentPosts.map(hakaton => (
          <HakatonNavDetail key={hakaton._id} hakaton={hakaton} />
        ))}


        <Pagination 
        totalPosts = {hakatons.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
         
         ></Pagination>
      </div>
    </div>
  );
}

export default HakatonNav;
