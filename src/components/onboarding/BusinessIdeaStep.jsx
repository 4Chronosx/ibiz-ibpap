import React, { useState, useEffect, useRef } from 'react';

/**
 * BusinessIdeaStep Component
 *
 * This component handles the first step of the onboarding process,
 * allowing the user to input their business idea and its location.
 * It includes a character counter for the business idea and
 * provides location suggestions using a conceptual API integration,
 * all styled with Material-UI for a prettier UI.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.nextStep - Callback function to advance to the next step.
 * @param {function} props.prevStep - Callback function to go to the previous step (not used directly in this step's UI).
 */