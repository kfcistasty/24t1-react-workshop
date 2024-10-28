import { BiFontSize } from "react-icons/bi";
import { character } from "./characterData";
import { IoTimeSharp } from "react-icons/io5";

const CharacterCard = () => {
	const listItems = character.items.map(item =>
		<li style={styles.normalText}>{item.item} x{item.quantity}</li>
	);

	const abilities = character.abilities.map(item =>
		<li style={styles.normalText}>{item}</li>
	);


	return(
		<>
			<div style={styles.blueBox}>
				<h1>{character.name}</h1>
			</div>
			<div style={styles.yellowBox}>
				<div style={styles.flexHorizontal}>
					<h1 style={styles.boldText}>LV {character.level}</h1>
					<h1 style={styles.boldText}>HP {character.hp_curr}/{character.hp_max}</h1>
				</div>
				<img style={styles.image} src={character.img} alt="character image" />
				<h2 style={styles.normalText}>{character.class}</h2>
			</div>
			<div style={styles.yellowHorizontal}>
				<div>
					<h1 style={styles.boldText}>Items</h1>
					<ul style={styles.list}>{listItems}</ul>
				</div>
				<div>
					<h1 style={styles.boldText}>Abilities</h1>
					<ul style={styles.list}>{abilities}</ul>
				</div>
			</div>
		</>
	);
}

export default CharacterCard;

const styles = {
	blueBox: {
		width:"400px",
		height: "35px",
		backgroundColor: "darkblue",
		border: "2px solid burlywood",
		fontSize: "5px",
		color: "white",
		marginBottom: "5px"
	},
	boldText: {
		fontSize: "15px",
		fontWeight: "bold",
		color: "black"
	},
	yellowBox: {
		background: "bisque",
		height: "112px",
		padding: "10px",
		marginBottom: "5px"
	},
	flexHorizontal: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	image: {
		height: "40px",
		width: "50px"
	},
	normalText: {
		fontSize: "15px",
		color: "black",
		fontWeight: "400"
	},
	yellowHorizontal: {
		background: "bisque",
		height: "auto",
		padding: "1px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		padding: "5px"
	},
	list: {
		listStyleType: "none"
	}
}