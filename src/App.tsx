import './App.css'
import {
  Card,
  CardContent,
  createTheme,
  CssBaseline,
  Grid,
  List,
  ListItem,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { NATO, type Unit } from './data'

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
})

const army = NATO

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid size={12}>
          <Card>
            <Stack
              component={CardContent}
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <UnitName unit={army} />
            </Stack>
          </Card>
        </Grid>

        {army.subordinates?.map((subordinate, index) => (
          <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
            <Card>
              <CardContent>
                <UnitName unit={subordinate} colors={[army?.color]} />
                <List>
                  {subordinate.subordinates?.map((sub, subIndex) => (
                    <ListItem key={subIndex}>
                      <UnitName
                        unit={sub}
                        colors={[subordinate?.color, army?.color]}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  )
}

interface UnitNameProps {
  unit: Unit
  colors?: (string | undefined)[]
}

function UnitName({ unit, colors }: UnitNameProps) {
  const shortName = unit.name.replaceAll(/[^A-Z]/g, '')
  const backgroundColor =
    unit.color ?? colors?.find((color) => color !== undefined)

  const icon = `/assets/nato_${unit.type}.svg`
  console.log(unit.name, unit.type, icon)

  return (
    <Stack direction="row" spacing={2}>
      <Stack
        sx={{
          width: 60,
          height: 30,
          ...(backgroundColor && {
            backgroundColor,
          }),
          color: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {unit.type && unit.type !== 'hq' ? (
          <img src={icon} alt={unit.type} style={{ width: 60, height: 30 }} />
        ) : (
          shortName
        )}
      </Stack>
      <Typography>{unit.name}</Typography>
    </Stack>
  )
}

export default App
