// Square
// this.text: text
// this.textColor: textColor
// this.shape: shape
// this.shapeFill: shapeFill
// this.fileName: fileName
// this.shapeElement: shapeElement <rect> etc
// this.xAttr: xAttr
// this.yAttr: yAttr
// this.width: width
// this.height: height
// this.textX: textX
// this.textY: textY
// this.fontSize: fontSize
// this.textAnchor: textAnchor

`<svg
	version="1.1"
	width="300"
	height="200"
	xmlns="http://www.w3.org/2000/svg">
	<${shapeElement}
		${width}="100%"
		${height}="100%"
		${shapeFill}="red"
        ${xAttr}=""
        ${yAttr}=""
	/>

	<text
		${textX}="150"
		${textY}="125"
		${fontSize}="60"
		${textAnchor}="middle"
		${textColor}="white">
		${text}
	</text>
</svg>; `;
