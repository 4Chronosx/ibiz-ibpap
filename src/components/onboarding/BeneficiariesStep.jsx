import React from 'react';
import { Typography, Box, TextField, Button, Chip } from '@mui/material';
import { PersonOutline, ChildCareOutlined, ManOutlined, SchoolOutlined, ElderlyOutlined, FamilyRestroomOutlined, SportsEsportsOutlined, FlightTakeoffOutlined, MoreHorizOutlined, EditOutlined, WorkOutline, FemaleOutlined } from '@mui/icons-material';

/**
 * BeneficiariesStep Component
 *
 * This component allows the user to select who will benefit most from their business idea
 * and describe their ideal customers. It uses Material-UI for a consistent and prettier UI.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.handleMultiSelectChange - Callback function for multi-select (e.g., beneficiaries).
 * @param {function} props.nextStep - Callback function to advance to the next step.
 */