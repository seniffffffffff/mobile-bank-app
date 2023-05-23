import React from 'react'
import './styles.css'
import { SectionProps } from '../interfaces/interfaces'

const SectionComp: React.FC<SectionProps> = ({ sectionName }) => {
    return (
        <div className="title">
            <h3 className="section-article">{sectionName}</h3>
            <div className="section-filter text-gray">View All</div>
        </div>
    )
}

export default SectionComp
