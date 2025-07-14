import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Typography, Box, CircularProgress, LinearProgress, Paper } from '@mui/material';

import videoOne from '../../assets/one.mp4';
import videoTwo from '../../assets/two.mp4';
import videoThree from '../../assets/three.mp4';

/**
 * LoadingAnimation Component
 *
 * This component displays a loading animation with a sequence of videos
 * while a process (e.g., business idea analysis) is ongoing.
 * It cycles through a list of video sources, randomizing the order and
 * repeating each video a few times before transitioning. It also includes
 * a Material-UI linear progress bar at the bottom.
 *
 * @param {object} props - The component props.
 * @param {string[]} props.videoSources - An array of video file paths to play in sequence.
 * Defaults to local video assets.
 * @param {string} props.submissionStatus - The current status of the submission ('idle', 'loading', 'success', 'error').
 * This can be used for conditional rendering of messages or animations.
 */