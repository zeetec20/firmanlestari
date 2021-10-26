import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Link from 'next/link'

interface propPortfolio {
  title: string,
  description: string,
  tag: string[],
  slug: string
}

const Portfolio = (prop: propPortfolio) => {
  let tags = (prop.tag).map((tag, key) => <a className='tag me-2' key={key}><b>#{tag}</b></a>)

  return (
    <Link href={`/portfolio/${prop.slug}`} passHref>
      <Card className='card-portfolio'>
        <div className='p-3 pb-0'>
          <Card.Img className='' style={{ borderRadius: '10px' }} variant="top" src="https://cdn.thewirecutter.com/wp-content/media/2021/03/allinonecomputers-2048px-00116-2x3-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200" />
        </div>
        <Card.Body>
          <Card.Title style={{ fontSize: '30px' }}><b>{prop.title}</b></Card.Title>

          <p style={{ color: process.env.color3, fontSize: '16px' }}>{prop.description}</p>

          <p>{tags}</p>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Portfolio