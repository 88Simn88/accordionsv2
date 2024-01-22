
import './App.css'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import Accordion2 from "./Accordion2.jsx"
import { useState } from 'react'

const accordionData = [
  {
  title: "Section 1",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit,   reiciendis eligendi iste possimus facere dolorum commodi repellat temporibus quidem sint, ad corrupti nulla doloribus alias eius at ex ullam."
  },
  {
    title: "Section 2",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit,   reiciendis eligendi iste possimus facere dolorum commodi repellat temporibus quidem sint, ad corrupti nulla doloribus alias eius at ex ullam."
    },
    {
      title: "Section 3",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit,   reiciendis eligendi iste possimus facere dolorum commodi repellat temporibus quidem sint, ad corrupti nulla doloribus alias eius at ex ullam."
      },

]

function App() {

const [expanded, setExpanded] = useState(false)

const handleChange = 
      (panel) => (
        event, isExpanded) => {
          setExpanded(isExpanded ? panel : false)
        }
      
    


  return (
    <div className='page-container'>
      <div className='card-container'>
        <div className='title-container'>
          <h1 className='title'>Accordion with library</h1>
        </div>
        <div className='accordeon-container'>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon='🔽'
              aria-controls='panel1-content'
              id='panel1-header'
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente fugit,
              reiciendis eligendi iste possimus
              facere dolorum commodi repellat
              temporibus quidem sint, ad corrupti
              nulla doloribus alias eius at ex ullam.

            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon="🔽"
              aria-controls='panel2-content'
              id='panel2-header'
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente fugit,
              reiciendis eligendi iste possimus
              facere dolorum commodi repellat
              temporibus quidem sint, ad corrupti
              nulla doloribus alias eius at ex ullam.
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon="🔽"
              aria-controls='panel3-content'
              id='panel3-header'
            >
              <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente fugit,
              reiciendis eligendi iste possimus
              facere dolorum commodi repellat
              temporibus quidem sint, ad corrupti
              nulla doloribus alias eius at ex ullam.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className='card-container'>
        <div className='title-container'>
          <h1 className='title'>Accordion without library</h1>
        </div>
        <div className='accordeon-container'>
          <Accordion2 sections={accordionData} />
        </div>
      </div>
    </div>
  )
}

export default App
