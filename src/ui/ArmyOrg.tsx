import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material'
import { ARMIES, type ArmyType, type Unit } from '../data'
import { ExpandMore } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router'

export default function ArmyOrg() {
  const navigate = useNavigate()

  const params = useParams()

  const side = params.army as ArmyType

  function handleClick(units: string[]) {
    const newPath = units.join('/').toLowerCase()
    navigate(newPath)
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid sx={{ width: '100%' }}>
        <Stack
          spacing={2}
          sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
        >
          <img
            src={`/assets/flag_${side}.png`}
            alt="NATO"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="h4">{ARMIES[side].name}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        {ARMIES[side].subordinates?.map((army) => (
          <Accordion sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container>
                <Grid size={12}>
                  <UnitName unit={army} />
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem sx={{ border: '1px solid white' }}>
                  {army.commander && (
                    <UnitName unit={army.commander} colors={[army?.color]} />
                  )}
                </ListItem>
              </List>
              <Grid container spacing={2}>
                {army.subordinates?.map((battalion, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                    <Card sx={{ border: '1px solid white' }}>
                      <CardContent>
                        <ListItemButton
                          onClick={() => handleClick([army.id, battalion.id])}
                        >
                          <UnitName unit={battalion} colors={[army?.color]} />
                        </ListItemButton>
                        <List>
                          {battalion.commander && (
                            <ListItem>
                              <ListItemButton
                                onClick={() =>
                                  battalion.commander &&
                                  handleClick([
                                    army.id,
                                    battalion.id,
                                    battalion.commander.id,
                                  ])
                                }
                              >
                                <UnitName
                                  unit={battalion.commander}
                                  colors={[battalion?.color, army?.color]}
                                />
                              </ListItemButton>
                            </ListItem>
                          )}
                          {battalion.subordinates?.map((company, subIndex) => (
                            <ListItem key={subIndex}>
                              <ListItemButton
                                onClick={() =>
                                  handleClick([
                                    army.id,
                                    battalion.id,
                                    company.id,
                                  ])
                                }
                              >
                                <UnitName
                                  unit={company}
                                  colors={[company?.color, army?.color]}
                                />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
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

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      spacing={2}
    >
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
