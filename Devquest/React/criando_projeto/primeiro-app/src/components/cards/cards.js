import Card from "../card/card"

const cardsTitle = ["Titulo card 1", "Titulo card 2", "Titulo card 3"]

const showCardColor = (color) => {
    console.log(color);
}

const Cards = () => {

    return (
        <div>
            <h2>meus cards</h2>

            <div>
                {
                    cardsTitle.map((cardTitle, index) => {
                        return (
                            <Card key={index} showCardColor={showCardColor}>
                                <h3>{cardTitle}</h3>
                                <p>esse é o tutilo do meu card 1</p>
                            </Card>
                        )
                    })
                }


                <Card color='blue'  showCardColor={showCardColor}>
                    <h3>Card com fundo azul</h3>
                    <p>esse é o tutilo do meu card 1</p>
                </Card>
                )
            </div>
        </div>

    )
}

export default Cards