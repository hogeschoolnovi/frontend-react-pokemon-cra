import React from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import './NavButtons.css';

export const NavButtons = ({ previousUrl, nextUrl, setUrl }) => {
    return (
        <div className="nav-buttons">
            <button
                type="button"
                className="previous"
                disabled={!previousUrl}
                onClick={() => {
                    setUrl(previousUrl);
                }}>
                <div>
                    <ChevronLeft /><span>Vorige</span>
                </div>
            </button>
            <button
                type="button"
                className="next"
                disabled={!nextUrl}
                onClick={() => {
                    setUrl(nextUrl);
                }}
            >
                <div>
                    <span>Volgende</span><ChevronRight />
                </div>
            </button>
        </div>
    )
}
