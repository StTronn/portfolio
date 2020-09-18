import React from 'react'
import styled from 'styled-components'

import {
	Icon,
	Layout,
	Link,
	QueryImage,
	SEO,
	Small,
	WaveSection,
} from 'src/components'

const Projects = styled.div`
	section {
		padding: calc(2rem + 1vw) 0;

		> :first-child {
			margin-top: 0;
		}
	}
`

const ProjectsPage = () => (
	<Layout activePage="projects">
		<SEO title="Projects" />
		<WaveSection>
			<p>
				Here's a brief introduction to some of the projects I've built
				or made significant contributions to! More details about some of
				the most interesting parts of the projects coming soon...
			</p>
		</WaveSection>

		<Projects>
			<section>
				<h3>
					<QueryImage
						style={{
							display: 'inline-block',
							marginRight: '10px',
							verticalAlign: 'middle',
							width: 54,
						}}
						name="flock"
					/>
					Flocking Infinity
				</h3>
				<p>
					{' '}
					Flocking Infinity is a chrome extension which replaces your
					new tab in chrome with lively boids/flock simulation. The
					simulation is randomly genrated and dosen't form any
					repetive patterns and is quite simillar to how real flock of
					birds behave.
				</p>
				<p>
					{' '}
					The Project is developed in Canvas js and is based on Craig
					Reynolds{' '}
					<a href="https://www.red3d.com/cwr/papers/1987/boids.html">
						paper
					</a>
					.
				</p>
				<Small>
					<Link
						to="https://chrome.google.com/webstore/detail/flocking-infinity/pmknhocdemkjddgphkdneljlokgfejca"
						button
					>
						Web Store
					</Link>
					&nbsp;
					<Link
						to="https://github.com/StTronn/Boids-Chrome-Extension"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>8-TILES</h3>
				<p>
					8-TILES is a web recreation of popular sliding puzzle in
					React. The app also feature an solving visualizer which uses
					A* search algorithm and manhattan distance as weights to
					solve the puzzle
				</p>
				<Small>
					<Link to="https://sttronn.github.io/8-TILES/" button>
						Play Game
					</Link>
					&nbsp;
					<Link
						to="https://github.com/StTronn/8-TILES"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>Vibes</h3>
				<p>Online tool to generate color pallete from images. </p>
				<Small>
					<Link
						to="https://sttronn.github.io/color-pallete-generator/"
						button
					>
						Site
					</Link>
					&nbsp;
					<Link
						to="https://github.com/StTronn/color-pallete-generator"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>Spotify-Party</h3>
				<p>
					The project allows users to create a room with friends
					allowing them to chat and see what others are playing.
				</p>
				<p>It is made using MERN stack, spotify api and socket.io</p>
				<Small>
					<Link to="http://3.92.116.12:3000/" button>
						Site
					</Link>
					&nbsp;
					<Link
						to="https://github.com/StTronn/spotify-party-1.0"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>
					<QueryImage
						name="Web-Cat"
						style={{
							display: 'inline-block',
							marginRight: '10px',
							verticalAlign: 'middle',
							width: 44,
						}}
					/>{' '}
					Web Cat
				</h3>
				<p>
					Built a market analysis tool with @Walkover by crawling 1
					million sites and categorized them. With features like
					search engine,sub-categorization, rank and size changes of
					each Industry for analyzing market trends
				</p>
				<p>
					{' '}
					All of this is packed in a clean but detailed UI. The UI is
					developed as a web app using React and is open sourced on my
					github profile.{' '}
				</p>
				<Small>
					<Link to="https://sttronn.github.io/web_cat/" button>
						Site
					</Link>
					&nbsp;
					<Link
						to="https://github.com/StTronn/web_cat"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>Drums-2.0</h3>
				<p>
					A Drum Machine made for desktop with WebAudioApi and React.
					Its design is based on the old and iconic roland 8080. It
					provides Attach, Delay, Sustain and Release controls for
					every instrument and a global reverb setting.
				</p>

				<Small>
					<Link to="https://sttronn.github.io/Drums-2.0/" button>
						Rock Beats
					</Link>
					&nbsp;
					<Link
						to="https://github.com/StTronn/Drums-2.0"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>Music visualizer</h3>
				<p>
					A music frequency visualizer using D3.js and the Web Audio
					API.
				</p>
				<Small>
					<Link to="https://sttronn.github.io/d3-music-viz/" button>
						viz
					</Link>
					&nbsp;
					<Link
						to="https://github.com/StTronn/d3-music-viz"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>6 Degrees of Kevin Bacon</h3>
				<p>
					The project find a Link between any actor in imdb database
					and Kevin Bacon. For Example Robert Downey Jr worked with
					Mickey Rourke in Iron Man 2 who then worked with Kevin Bacon
					in Diner, therfore Robert Downey Jr and Kevin Bacon has a
					degree of 2.
				</p>
				<p>
					It uses a graph database created from imdb database and then
					uses a 2 way bfs to link the 2 actors
				</p>
				<p>
					The project is inspired from the following famous{' '}
					<a href="https://oracleofbacon.org/"> project</a> and{' '}
					<a href="https://www.cs.cornell.edu/home/kleinber/networks-book/networks-book-ch20.pdf">
						Paper
					</a>
					.
				</p>
				<Small>
					<Link
						to="https://github.com/StTronn/Oracle-of-Kevin-Bacon"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>Tetris </h3>
				<p>Tetris clone in js </p>
				<Small>
					<Link to="https://github.com/StTronn/Tetris" button>
						play
					</Link>
					&nbsp;
					<Link
						to="https://sttronn.github.io/Tetris/"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>
		</Projects>
	</Layout>
)

export default ProjectsPage
