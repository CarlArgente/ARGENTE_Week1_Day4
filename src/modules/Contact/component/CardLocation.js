import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const CardLocation = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={{ overflowWrap: "break-word" }}>
          Located at
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7723.209537414702!2d121.10420460487121!3d14.564579813801148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1694339742279!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: '0', marginTop: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </CardContent>
    </Card>
  )
}

export default CardLocation