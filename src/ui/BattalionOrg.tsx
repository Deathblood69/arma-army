import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router'
import { ARMIES, type ArmyType } from '../data'
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
import { ExpandMore } from '@mui/icons-material'
import UnitName from './UnitName.tsx'

export default function BattalionOrg() {
  const navigate = useNavigate()

  const params = useParams()

  const side = params.army as ArmyType
  const brigade = params.brigade
  const battalion = params.battalion

  const selectedArmy = ARMIES[side]

  const selectedBrigade = selectedArmy.subordinates?.find((subordinate) => {
    return subordinate.id.toLowerCase() === brigade
  })

  if (!selectedBrigade) {
    return <Fragment />
  }

  const selectedBattalion = selectedBrigade?.subordinates?.find(
    (subordinate) => {
      return subordinate.id.toLowerCase() === battalion
    },
  )

  if (!selectedBattalion) {
    return <Fragment />
  }

  const shortName = selectedBattalion.name.replaceAll(/[^A-Z]/g, '')
  const inheritedColors = [
    selectedBattalion?.color,
    selectedBrigade?.color,
    selectedArmy.color,
  ]
  const backgroundColor = inheritedColors.find((color) => color !== undefined)

  function handleClick(units: string[]) {
    const newPath = units.join('/').toLowerCase()
    navigate(newPath)
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid sx={{ width: '100%' }}>
        <Stack
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Stack
            sx={{
              width: 600,
              height: 400,
              ...(backgroundColor && {
                backgroundColor,
              }),
              color: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {shortName}
          </Stack>
          <Typography variant="h4">{selectedBattalion.name}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        {selectedBattalion.commander && (
          <Accordion sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container>
                <Grid size={12}>
                  <UnitName
                    unit={selectedBattalion.commander}
                    colors={inheritedColors}
                  />
                </Grid>
              </Grid>
            </AccordionSummary>
          </Accordion>
        )}
        {selectedBattalion.subordinates?.map((company) => (
          <Accordion sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container>
                <Grid size={12}>
                  <UnitName unit={company} colors={inheritedColors} />
                </Grid>
              </Grid>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem sx={{ border: '1px solid white' }}>
                  {company.commander && (
                    <UnitName
                      unit={company.commander}
                      colors={[company?.color, ...inheritedColors]}
                    />
                  )}
                </ListItem>
              </List>
              <Grid container spacing={2}>
                {company.subordinates?.map((squad, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                    <Card sx={{ border: '1px solid white' }}>
                      <CardContent>
                        <ListItemButton
                          onClick={() => handleClick([company.id, squad.id])}
                        >
                          <UnitName
                            unit={squad}
                            colors={[company?.color, ...inheritedColors]}
                          />
                        </ListItemButton>
                        <List>
                          {squad.commander && (
                            <ListItem>
                              <ListItemButton
                                onClick={() =>
                                  squad.commander &&
                                  handleClick([
                                    company.id,
                                    squad.id,
                                    squad.commander.id,
                                  ])
                                }
                              >
                                <UnitName
                                  unit={squad.commander}
                                  colors={[
                                    squad?.color,
                                    company?.color,
                                    ...inheritedColors,
                                  ]}
                                />
                              </ListItemButton>
                            </ListItem>
                          )}
                          {squad.subordinates?.map((soldier, subIndex) => (
                            <ListItem key={subIndex}>
                              <ListItemButton
                                onClick={() =>
                                  handleClick([
                                    soldier.id,
                                    squad.id,
                                    soldier.id,
                                  ])
                                }
                              >
                                <UnitName
                                  unit={soldier}
                                  colors={[
                                    soldier?.color,
                                    squad?.color,
                                    company?.color,
                                    ...inheritedColors,
                                  ]}
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
