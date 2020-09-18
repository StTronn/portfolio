import React from 'react'

import { Icon, Layout, Link, Resume, SEO, WaveSection } from 'src/components'
import { github } from 'src/links'

const ResumePage = () => (
	<Layout activePage="resume">
		<SEO title="Rishav Resume" />
		<Resume>
			<WaveSection disableTopMargin>
				<p>
					Here's an overview of some of the things I've worked on. I
					am currently an undergrad at IET Davv and looking for
					software dev roles I have previous experience as a SDE and a
					frontend developer. For more details, download my resume as
					a PDF, or check out some of my code on GitHub!
				</p>
				<p>
					<Link to="/resume.pdf" external button>
						Download Resume
					</Link>
					&nbsp;
					<Link to={github} secondary button>
						<Icon name="GitHub" /> Visit GitHub
					</Link>
				</p>
			</WaveSection>
			<Resume.Position name="Experience" primary></Resume.Position>
			<Resume.Position
				name="Walkover"
				link="https://www.walkover.in/"
				start="May 2020"
				end="July 2020"
			>
				<Resume.Role name="SDE Intern" />
				<Resume.Description>
					<p>
						Software Intern involved in creating a marketing
						analysis tool from scratch named{' '}
						<a href="http://13.235.90.61/">Web Cat</a> using
						websites as data. Developed the ML model as well as the
						frontend for the project.{' '}
					</p>

					<p>
						Created an Sandox enviornment for{' '}
						<a href="https://viasocket.com/"> ViaSocket </a>
						allowing them to execute users script safely inside a
						docker. Later built a browser interface to edit and run
						scripts.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Nvidia"
				link="http://www.nvdia.com"
				start="May 2019"
				end="June 2019"
			>
				<Resume.Role name="Summer School Intern" />
				<Resume.Description>
					<p>
						Selected and attended in compiler design programm by ACM
						and Nvidia on Compiler Design. My area of intrest
						primarily on Machine independent optimization usign
						graphs.
					</p>
				</Resume.Description>
			</Resume.Position>
			<Resume.Position
				name="Flocking Infinity"
				link="https://chrome.google.com/webstore/detail/flocking-infinity/pmknhocdemkjddgphkdneljlokgfejca?hl=en&authuser=2"
			>
				<Resume.Role name="Creator Chrome Extension" />
				<Resume.Description>
					<p>
						Build a Chrome Extension based which replaces your new
						tab with boids simulation.
					</p>
				</Resume.Description>
			</Resume.Position>

			<Resume.Position name="Projects" primary>
				<Resume.Role
					name="8-TILES"
					link="https://sttronn.github.io/8-TILES/"
				/>
				<p> A 8 tiles puzzle game with A* search solver</p>

				<Resume.Role
					name="Spotify-Party"
					link="http://3.92.116.12:3000/"
				/>
				<p>Chat and see what your freinds are playing.</p>

				<Resume.Role
					name="Vibes"
					link="https://sttronn.github.io/color-pallete-generator/"
				/>
				<p>A color pallete generator from images</p>
				<Resume.Role
					name="Drums-2.0"
					link="https://sttronn.github.io/Drums-2.0/"
				/>
				<p>Drum Machine with audio effects (reverb, ADSR).</p>

				<Resume.Role
					name="6 Degrees of Kevin Bacon"
					link="https://github.com/StTronn/Oracle-of-Kevin-Bacon"
				/>
				<p> Find relation through between any actor and Kevin Bacon</p>
				<Resume.Role
					name="d3-music-visualizer"
					link="https://sttronn.github.io/d3-music-viz/"
				/>
				<p>Music Visualizer made with d3js and WebAudioApi</p>
			</Resume.Position>

			<Resume.Position
				name="Skills & Languages"
				primary
			></Resume.Position>
			<p>
				{' '}
				React React-Native Redux Express GraphQl MongoDB postgreSQL
				Flask Pandas d3 Neo4j{' '}
			</p>
			<p> Js Python C++ Java </p>
			<Resume.Position name="Papers" primary>
				<Resume.Role
					name="Enabling Technologies and Applications of Iot - SSRN"
					link="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3365534"
				/>
			</Resume.Position>
			<Resume.Position name="Education" primary subtext="IET Davv">
				<Resume.Role
					name="Computer Science - 7.53"
					start="September 2017"
					end="June 2020"
				/>
			</Resume.Position>
		</Resume>
	</Layout>
)

export default ResumePage
