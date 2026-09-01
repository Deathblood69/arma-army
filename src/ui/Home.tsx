import { Button, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { ARMIES } from '../data'

export default function Home() {
  const navigate = useNavigate()

  function handleClick(army: string) {
    navigate(army)
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {Object.keys(ARMIES).map((key) => {
        const army = ARMIES[key as keyof typeof ARMIES]
        return (
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Button onClick={() => handleClick(key)}>
              <Stack
                spacing={2}
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <img
                  src={`/assets/flag_${key}.png`}
                  alt={key}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                <Typography variant="h5" sx={{ color: army.color }}>
                  {army.name}
                </Typography>
              </Stack>
            </Button>
          </Grid>
        )
      })}
    </Grid>
  )
}
