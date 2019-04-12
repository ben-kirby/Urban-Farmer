import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


export default class FooterComponent extends Component {
	render() {
		return (
			<Container>
       
				<Content />
				<Footer>
					<FooterTab>
						<Button vertical active >
							<Icon name="home" />
							<Text>Home</Text>
						</Button>

						<Button vertical active>
							<Icon name="paper" />
							<Text>Inv</Text>
						</Button>

						<Button vertical active >
							<Icon name="add" />
              
							<Text>Add</Text>
						</Button>
						<Button vertical active>
							<Icon name="book" />
							<Text>sales</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}

 
}

