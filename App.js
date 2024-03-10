import React, { useState } from 'react'; 
import { StyleSheet, Text, View, Button, Image, ScrollView } 
	from 'react-native'; 

const image1 = 
'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; 
const image2 = 
'https://media.istockphoto.com/id/1411374769/photo/development-of-a-web-site-with-css-code-and-creation-of-a-style-sheet-to-improve-a-website.jpg?s=1024x1024&w=is&k=20&c=SNEmPYoOwIoJY7dlqYAhtALvGbpl4sJOhelBo2ngpKQ='; 
const image3 = 
'https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?s=1024x1024&w=is&k=20&c=iGiUPCesPFZq06F0eE_I72w5Z7dW_LgUeciGmyONLcM='; 
const image4 = 
'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; 

const App = () => { 
	const [votes, setVotes] = useState({ 
		image1: 0, 
		image2: 0, 
		image3: 0, 
		image4: 0, 
	}); 

	const castVote = (imageKey) => { 
		setVotes((prevVotes) => ({ 
			...prevVotes, 
			[imageKey]: prevVotes[imageKey] + 1, 
		})); 
	}; 

	return ( 
		<ScrollView contentContainerStyle={styles.container}> 
			<Text style={styles.title}>Voting App</Text> 

			<View style={styles.imageBtnContainer}> 
				<View style={styles.imageContainer}> 
					<Image source={{ uri: image1 }} 
						style={styles.image} /> 
					<Button 
						title="Vote for HTML"
						onPress={() => castVote('image1')} 
						style={styles.button} 
					/> 
					<View style={styles.voteContainer}> 
						<Text style={styles.voteText}>Votes: 
						{votes.image1}</Text> 
					</View> 
				</View> 

				<View style={styles.imageContainer}> 
					<Image source={{ uri: image2 }} 
					style={styles.image} /> 
					<Button 
						title="Vote for CSS"
						onPress={() => castVote('image2')} 
						style={styles.button} 
					/> 
					<View style={styles.voteContainer}> 
						<Text style={styles.voteText}>Votes: 
						{votes.image2}</Text> 
					</View> 
				</View> 
			</View> 

			<View style={styles.imageBtnContainer}> 
				<View style={styles.imageContainer}> 
					<Image source={{ uri: image3 }} 
					style={styles.image} /> 
					<Button 
						title="Vote for Javascript"
						onPress={() => castVote('image3')} 
						style={styles.button} 
					/> 
					<View style={styles.voteContainer}> 
						<Text style={styles.voteText}>Votes: 
						{votes.image3}</Text> 
					</View> 
				</View> 

				<View style={styles.imageContainer}> 
					<Image source={{ uri: image4 }} 
						style={styles.image} /> 
					<Button 
						title="Vote for React"
						onPress={() => castVote('image4')} 
						style={styles.button} 
					/> 
					<View style={styles.voteContainer}> 
						<Text style={styles.voteText}> 
							Votes: {votes.image4} 
						</Text> 
					</View> 
				</View> 
			</View> 
		</ScrollView> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		alignItems: 'center', 
		backgroundColor: '#D2E0FB', 
	}, 
	title: { 
		fontSize: 20, 
		fontWeight: 'bold', 
		marginVertical: 20, 
		color: 'green'
	}, 
	imageBtnContainer: { 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		marginBottom: 10, 
	}, 
	imageContainer: { 
		alignItems: 'center', 
		marginRight: 10, 
	}, 
	image: { 
		width: 150, 
		height: 150, 
		resizeMode: 'cover', 
		marginBottom: 10, 
	}, 

	voteContainer: { 
		backgroundColor: '#8EACCD', 
		padding: 5, 
		borderRadius: 5, 
		marginTop: 10 
	}, 
	voteText: { 
		fontSize: 16, 
		fontWeight: 'bold', 
		color: 'white', 
	}, 
}); 

export default App;
