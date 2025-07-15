import React from 'react';
import { Typography, Box, TextField, Button, Chip } from '@mui/material';
import { PersonOutline, ChildCareOutlined, ManOutlined, SchoolOutlined, ElderlyOutlined, FamilyRestroomOutlined, SportsEsportsOutlined, FlightTakeoffOutlined, WorkOutline, FemaleOutlined } from '@mui/icons-material';
import { ShoppingBagOutlined, LocalShippingOutlined, EmojiEventsOutlined, LightbulbOutlined, InfoOutlined, MoreHorizOutlined, EditOutlined, TravelExploreOutlined } from '@mui/icons-material';

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
const BusinessProvideStep = ({ formData, handleChange, handleMultiSelectChange, nextStep }) => {
    const maxCharacters = 5000;

    const getProvidesIcon = (item) => {
        switch (item) {
            case 'Business Partner': return <ShoppingBagOutlined sx={{ color: '#f97316' }} />;
            case 'Equipment': return <LocalShippingOutlined sx={{ color: '#f97316' }} />;
            case 'Funding': return <LightbulbOutlined sx={{ color: '#f97316' }} />;
            case 'No Team Yet': return <TravelExploreOutlined sx={{ color: '#f97316' }} />;
            case 'Others': return <MoreHorizOutlined sx={{ color: '#f97316' }} />;
            default: return null;
        }
    };

    function Chip({label, icon, selected, onClick}) {
        return(
            <button
                type="button"
                onClick={onClick}
                className={`
                    flex items-center gap-2 px-4 py-2 rounded-full border font-medium transition-all duration-200
                ${selected
                    ? 'bg-primary-orange text-white border-primary-orange'
                    : 'bg-white text-primary-orange border-primary-orange'}
                hover:bg-yellow-100
                `}
            > 
                <span className="text-lg">{icon}</span>
                {label}
                </button>
            )
        }

        return (
            <div className='w-[640px] h-[435px]'>
            <div className='flex flex-wrap gap-2 mb-4 justify-center'>
                {(() => {
                  const organizationIcons = {
                    Partners: "🤜",
                    Equipment: "🛠️",
                    Funding: "💵",
                    NoTeamYet: "👥",
                    Others: "…"
                  };
                  return Object.keys(organizationIcons).map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      icon={organizationIcons[item]}
                      selected={formData.businessOrganization.includes(item)}
                      onClick={() => handleMultiSelectChange('businessOrganization', item)}
                    />
                  ));
                })()}
            </div>

            {formData.beneficiaries.includes('Others') && (
                <div className="mb-4">
                    <label htmlFor="customBusinessOrganization" className="flex items-center gap-2 text-primary-orange font-medium mb-2">
                        <span role="img" aria-label="more">…</span> Specify other beneficiaries
                    </label>
                    <input
                        id="customBusinessOrganization"
                        name="customBusinessOrganization"
                        type="text"
                        value={formData.customBusinessOrganization}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                        placeholder="Specify other beneficiaries"
                    />
                </div>
            )}

            <div className="mb-4">
                <p className="text-sm text-right mb-1 text-secondary-black italic">
                    {formData.howToDeliver?.length || 0}/{maxCharacters} characters
                </p>
                <label htmlFor="describeCustomers" className="flex items-center gap-2 text-primary-black mb-2">
                   
                </label>
                <textarea
                    id="howToDeliver"
                    name="howToDeliver"
                    value={formData.howToDeliver || ''}
                    onChange={handleChange}
                    rows={6}
                    maxLength={maxCharacters}
                    className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                    placeholder="✏️ Describe your ideal customers or users. Think about age, location, habits, or a specific need."
                />
            </div>
        </div>
    );
};

export default BusinessProvideStep;
