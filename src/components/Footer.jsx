import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import {FaUser} from "react-icons/fa"

const Footer = () => {
  return (
			<div className="footer d-flex justify-content-center py-2 align-items-center bg-primary ">
				<span className='text-white pt-1'>Created by: Jake Servin&nbsp;&nbsp;</span>
				<a
					href="https://github.com/JakeServin"
					target="blank"
					type="button"
					style={{ color: "white" }}
				>
					<BsGithub size={22} />
				</a>
				<a
					href="https:/linkedIn.com/in/JakeServin"
					target="blank"
					type="button"
					className="mx-3"
					style={{ color: "white" }}
				>
					<BsLinkedin size={22} />
				</a>
        <div className="footer d-flex justify-content-center py-2 align-items-center bg-primary">
				<span className='text-white pt-1'>Drew Butler&nbsp;&nbsp;</span>
				<a
					href="https://github.com/awbutler"
					target="blank"
					type="button"
					style={{ color: "white" }}
				>
					<BsGithub size={22} />
				</a>
				<a
					href="https:/linkedIn.com/in/drewbutlermba"
					target="blank"
					type="button"
					className="mx-3"
					style={{ color: "white" }}
				>
					<BsLinkedin size={22} />
				</a>
			</div>
      </div>
  )
}

export default Footer