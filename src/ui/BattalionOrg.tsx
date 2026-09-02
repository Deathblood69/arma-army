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
import useBattalion from "../hooks/useBattalion.ts";

export default function BattalionOrg() {
  const navigate = useNavigate();

  const params = useParams();

  const { army, brigade, battalion } = useBattalion(
    params.army,
    params.brigade,
    params.battalion,
  );

  const shortName = battalion.name.replaceAll(/[^A-Z]/g, "");

  const inheritedColors = [battalion?.color, brigade?.color, army.color];

  const backgroundColor = inheritedColors.find((color) => color !== undefined);
  const icon = `/assets/nato_${battalion.type}.svg`;

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
            {battalion.type && battalion.type !== "hq" ? (
              <img
                src={icon}
                alt={battalion.type}
                style={{
                  width: 600,
                  height: 400,
                }}
              />
            ) : (
              shortName
            )}
          </Stack>
          <Typography variant="h4">{battalion.name}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        {battalion.commander && (
          <Accordion sx={{ p: 2 }} defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container sx={{ width: "100%" }}>
                <Grid size={"auto"}>
                  <UnitName
                    unit={battalion.commander}
                    colors={inheritedColors}
                  />
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem sx={{ border: "1px solid white" }}>
                  {battalion.commander.commander && (
                    <UnitName
                      unit={battalion.commander.commander}
                      colors={[battalion?.color, ...inheritedColors]}
                    />
                  )}
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        )}
        {battalion.subordinates?.map((company) => (
          <Accordion key={company.id} sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container>
                <Grid size={"auto"}>
                  <UnitName unit={company} colors={inheritedColors} />
                </Grid>
              </Grid>
              <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
                <IconButton onClick={() => handleClick([company.id])}>
                  <Launch />
                </IconButton>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem sx={{ border: "1px solid white" }}>
                  {company.commander && (
                    <UnitName
                      unit={company.commander}
                      colors={[company?.color, ...inheritedColors]}
                    />
                  )}
                </ListItem>
              </List>
              <Grid container spacing={2} sx={{ pt: 2 }}>
                {company.subordinates?.map((section, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                    <Card sx={{ border: "1px solid white" }}>
                      <CardContent>
                        <ListItemButton
                          onClick={() => handleClick([company.id, section.id])}
                        >
                          <UnitName
                            unit={section}
                            colors={[company?.color, ...inheritedColors]}
                          />
                        </ListItemButton>
                        <List>
                          {section.commander && (
                            <ListItem sx={{ pr: 0 }}>
                              <ListItemButton
                                onClick={() =>
                                  section.commander &&
                                  handleClick([
                                    company.id,
                                    section.id,
                                    section.commander.id,
                                  ])
                                }
                              >
                                <UnitName
                                  unit={section.commander}
                                  colors={[
                                    section?.color,
                                    company?.color,
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
  );
}
