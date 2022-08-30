const getRandomNumber = () => Math.floor(Math.random() * 256);

class Color {
    generateRandomColor() {
        const color = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`
        return color;
    }
}

const color = new Color()
console.log(color.generateRandomColor());