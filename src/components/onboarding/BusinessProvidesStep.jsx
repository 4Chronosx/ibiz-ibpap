import React from 'react';
import { ShoppingBagOutlined, LocalShippingOutlined, EmojiEventsOutlined, LightbulbOutlined, InfoOutlined, MoreHorizOutlined, EditOutlined, TravelExploreOutlined } from '@mui/icons-material';

/**
 * BusinessProvidesStep Component
 *
 * This component allows the user to select what their business provides
 * and describe how they plan to deliver or build it. It uses Material-UI
 * for a consistent and visually appealing user interface.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.handleMultiSelectChange - Callback function for multi-select (e.g., businessProvides).
 * @param {function} props.nextStep - Callback function to advance to the next step (not used directly in this step's UI).
 */