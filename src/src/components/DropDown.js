import { motion } from 'framer-motion';
import dropDownWhite from '../images/DropdownWhite.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function DropDown() {


  const [isOpen, setIsOpen] = useState(false);

  const container = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,

      }
    },
    open: {
      opacity: 1,
      height: '220px',
      transition: {
        duration: 0.5,

      }
    }
  }

  const list = {
    closed: {
      opacity: 0,
      x:-500,
    },
    open: {
      opacity: 1,
      y:0,
      transition: {
        duration: 0.5,
        delayChildren: 0.1,
        staggerChildren: 0.02

      }
    }

  }

  const item = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,

    }
  }


  return (


    <div className="projectContainer">

      <motion.img className="dropDown" src={dropDownWhite} onClick={() => { !isOpen ? setIsOpen(true) : setIsOpen(false) }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        animate={isOpen ? { rotate: 180, transition: { duration: 0.5 } } : { rotate: 0 }}
      ></motion.img>

      <motion.div className="projectDiv centerDiv" id='project1'
        initial={{ height: 0, opacity: 0 }}
        animate={!isOpen ? 'closed' : 'open'}
        variants={container}
      >
        <motion.ul className='projectList'
          animate={!isOpen ? 'closed' : 'open'}
          variants={list}
        >
          <motion.li variants={item} className="fontify listEle"><Link to="../" className='navListItem'>Home</Link></motion.li>
          <motion.li variants={item} className="fontify listEle"><Link to="../senior-care" className='navListItem'>Senior Care</Link></motion.li>
          <motion.li variants={item} className="fontify listEle"><Link to="../pet-care" className='navListItem'>Pet Care</Link></motion.li>
          <motion.li variants={item} className="fontify listEle"><Link to="../odd-jobs" className='navListItem'>Odd Jobs</Link></motion.li>
          <motion.li variants={item} className="fontify listEle"><Link to="../property-management" className='navListItem'>Property Management</Link></motion.li>
        </motion.ul>

      </motion.div>
    </div>

  );

}

export default DropDown