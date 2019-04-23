import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const CharacterCard = props => {
  const { name, height, gender, species, homeworld } = props

  return (
    <Card style={{ minWidth: 250, margin: 8 }}>
      <CardHeader title={name} style={{ color: 'black' }} />

      <CardContent>
        <Typography variant="body2">{gender}</Typography>
        <Typography variant="body1">{height} cm</Typography>
        {species !== null && (
          <Typography variant="body1">{species.name}</Typography>
        )}
        <Typography variant="body1">Homeworld: {homeworld.name}</Typography>
      </CardContent>
    </Card>
  )
}

export default CharacterCard
