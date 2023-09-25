import React, { useEffect, useState } from 'react';
import ShowProject from './ShowProject';
import Pagination from '../HakatonNav/Pagination';

const Project = () => {

    const [projects, setProjects] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPosts = projects.slice(firstPostIndex, lastPageIndex);

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-20 md:mx-10 mx-2 my-20'>
                {
                    currentPosts.map(project => <ShowProject key={project._id} project={project}></ShowProject>)
                }
            </div>

            <Pagination
                totalPosts={projects.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}

            ></Pagination>
        </div>
    );
};

export default Project;