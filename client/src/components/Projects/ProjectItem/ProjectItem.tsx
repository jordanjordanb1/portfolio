import React from 'react';
import Project from '../../../interfaces/ProjectInterface';
import Image from 'react-bootstrap/Image';
import './ProjectItem.scss';
import { Link } from 'react-router-dom';
import { config } from '../../../config';

interface Props {
    key: number;
    project: Project;
}

export default function ProjectItem({ project }: Props) {
    return (
        <Link
            to={{
                pathname: `/projects/${project._id}`,
                state: {
                    project,
                    animation: 'slide-right',
                },
            }}
            className="project-item"
        >
            <div className="project-item-overlay d-flex justify-content-center align-items-center">
                <div className="project-item-overlay-circle d-flex justify-content-center align-items-center">
                    <span className="mt-1">VIEW</span>
                </div>
            </div>
            {/* { In the future create smaller images 350x250} */}
            <Image src={`${config.url}/images/projects/${project._id}-min.png`} />
        </Link>
    );
}
