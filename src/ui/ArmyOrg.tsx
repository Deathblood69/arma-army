import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'
import { ARMIES, type ArmyType, type Unit } from '../data'
import { ExpandMore } from '@mui/icons-material'
import { useParams } from 'react-router'

export default function ArmyOrg() {
  const params = useParams()

  const army = params.army as ArmyType

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid sx={{ width: '100%' }}>
        <Stack
          spacing={2}
          sx={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}
        >
          <img
            src={`/assets/flag_${army}.png`}
            alt="NATO"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Typography variant="h4">{ARMIES[army].name}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        {ARMIES[army].subordinates?.map((unit) => (
          <Accordion sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container>
                <Grid size={12}>
                  <UnitName unit={unit} />
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem sx={{ border: '1px solid white' }}>
                  {unit.commander && (
                    <UnitName unit={unit.commander} colors={[unit?.color]} />
                  )}
                </ListItem>
              </List>
              <Grid container spacing={2}>
                {unit.subordinates?.map((subordinate, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                    <Card sx={{ border: '1px solid white' }}>
                      <CardContent>
                        <UnitName unit={subordinate} colors={[unit?.color]} />
                        <List>
                          <ListItem>
                            {subordinate.commander && (
                              <UnitName
                                unit={subordinate.commander}
                                colors={[subordinate?.color, unit?.color]}
                              />
                            )}
                          </ListItem>
                          {subordinate.subordinates?.map((sub, subIndex) => (
                            <ListItem key={subIndex}>
                              <UnitName
                                unit={sub}
                                colors={[subordinate?.color, unit?.color]}
                              />
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
