import React from 'react';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import './NavButtons.css';

export const NavButtons = ({ previousUrl, nextUrl, setUrl }) => {
    return (
        <div className="nav-buttons">
            <button type="button" className="previous"
                disabled={!previousUrl}
                onClick={() => {
                    if (previousUrl) {
                        setUrl(previousUrl);
                    }
                }}>
                <span><ChevronLeft />Vorige</span>
            </button>
            <button type="button" className="next"
                disabled={!nextUrl}
                onClick={() => {
                    if (nextUrl) {
                        setUrl(nextUrl);
                    }
                }}
            ><span>Volgende<ChevronRight /></span>
            </button>
        </div>
    )
}
