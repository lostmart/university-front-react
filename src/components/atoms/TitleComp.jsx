import React from "react"

const TitleComp = ({ titleText, titleType, nameOfClass }) => {
	switch (titleType) {
		case "h1":
			return <h1 className={nameOfClass ? nameOfClass : ""}>{titleText}</h1>
		case "h2":
			return <h2 className={nameOfClass ? nameOfClass : ""}>{titleText}</h2>
		case "h3":
			return <h3 className={nameOfClass ? nameOfClass : ""}>{titleText}</h3>
	}
}

export default TitleComp
