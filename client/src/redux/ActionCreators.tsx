import axios from 'axios';
import { config } from '../config';
import * as ActionTypes from './ActionTypes';
import Project from '../interfaces/ProjectInterface';

axios.defaults.baseURL = config.url; // Sets base URL in axios

export const setProjectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING,
});

export const setProjectsError = () => ({
    type: ActionTypes.PROJECTS_LOADED_ERROR,
});

export const setProjectsList = (projects: Project[]) => ({
    type: ActionTypes.SET_PROJECTS,
    payload: projects,
});
