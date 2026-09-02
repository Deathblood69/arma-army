import { useNavigate, useParams } from "react-router";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore, Launch } from "@mui/icons-material";
import UnitName from "./UnitName.tsx";
import useBrigade from "../hooks/useBrigade.ts";

export default function BrigadeOrg() {
  const navigate = useNavigate();

  const params = useParams();

  const { army, brigade } = useBrigade(params.army, params.brigade);

  const shortName = brigade.name.replaceAll(/[^A-Z]/g, "");

  const inheritedColors = [brigade?.color, brigade?.color, army.color];

  const backgroundColor = inheritedColors.find((color) => color !== undefined);
  const icon = `/assets/nato_${brigade.type}.svg`;

  function handleClick(units: string[]) {
    const newPath = units.join("/").toLowerCase();
    navigate(newPath);
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid sx={{ width: "100%" }}>
        <Stack
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              width: 600,
              height: 400,
              ...(backgroundColor && {
                backgroundColor,
              }),
              color: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {brigade.type && brigade.type !== "hq" ? (
              <img
                src={icon}
                alt={brigade.type}
                style={{
                  width: 600,
                  height: 400,
                }}
              />
            ) : (
              shortName
            )}
          </Stack>
          <Typography variant="h4">{brigade.name}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        {brigade.commander && (
          <Accordion sx={{ p: 2 }} defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container sx={{ width: "100%" }}>
                <Grid size={"auto"}>
                  <UnitName unit={brigade.commander} colors={inheritedColors} />
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem sx={{ border: "1px solid white" }}>
                  {brigade.commander.commander && (
                    <UnitName
                      unit={brigade.commander.commander}
                      colors={[brigade?.color, ...inheritedColors]}
                    />
                  )}
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        )}
        {brigade.subordinates?.map((battalion) => (
          <Accordion key={battalion.id} sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container sx={{ width: "100%" }}>
                <Grid size={"auto"}>
                  <UnitName unit={battalion} colors={inheritedColors} />
                </Grid>
              </Grid>
              <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
                <IconButton onClick={() => handleClick([battalion.id])}>
                  <Launch />
                </IconButton>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem sx={{ border: "1px solid white" }}>
                  {battalion.commander && (
                    <UnitName
                      unit={battalion.commander}
                      colors={[battalion?.color, ...inheritedColors]}
                    />
                  )}
                </ListItem>
              </List>
              <Grid container spacing={2} sx={{ pt: 2 }}>
                {battalion.subordinates?.map((section, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                    <Card sx={{ border: "1px solid white" }}>
                      <CardContent>
                        <ListItemButton
                          onClick={() =>
                            handleClick([battalion.id, section.id])
                          }
                        >
                          <UnitName
                            unit={section}
                            colors={[battalion?.color, ...inheritedColors]}
                          />
                        </ListItemButton>
                        <List>
                          {section.commander && (
                            <ListItem sx={{ pr: 0 }}>
                              <ListItemButton
                                onClick={() =>
                                  section.commander &&
                                  handleClick([
                                    battalion.id,
                                    section.id,
                                    section.commander.id,
                                  ])
                                }
                              >
                                <UnitName
                                  unit={section.commander}
                                  colors={[
                                    section?.color,
                                    battalion?.color,
                                    ...inheritedColors,
                                  ]}
                                />
                              </ListItemButton>
                            </ListItem>
                          )}
                          {section.subordinates?.map((squad, subIndex) => (
                            <ListItem key={subIndex} sx={{ pr: 0 }}>
                              <ListItemButton
                                onClick={() =>
                                  handleClick([squad.id, section.id, squad.id])
                                }
                              >
                                <UnitName
                                  unit={squad}
                                  colors={[
                                    squad?.color,
                                    section?.color,
                                    battalion?.color,
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
  );
}
