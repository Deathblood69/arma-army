import { useNavigate, useParams } from "react-router";
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
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import UnitName from "./UnitName.tsx";
import useSection from "../hooks/useSection.ts";

export default function SectionOrg() {
  const navigate = useNavigate();

  const params = useParams();

  const { army, brigade, battalion, company, section } = useSection(
    params.army,
    params.brigade,
    params.battalion,
    params.company,
    params.section,
  );

  const shortName = battalion.name.replaceAll(/[^A-Z]/g, "");

  const inheritedColors = [
    company?.color,
    battalion?.color,
    brigade?.color,
    army.color,
  ];

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
            {section.type && section.type !== "hq" ? (
              <img
                src={icon}
                alt={section.type}
                style={{
                  width: 600,
                  height: 400,
                }}
              />
            ) : (
              shortName
            )}
          </Stack>
          <Typography variant="h4">{section.name}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        {section.commander && (
          <Accordion sx={{ p: 2 }} defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container>
                <Grid size={12}>
                  <UnitName unit={section.commander} colors={inheritedColors} />
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem sx={{ border: "1px solid white" }}>
                  {section.commander.commander && (
                    <UnitName
                      unit={section.commander.commander}
                      colors={[battalion?.color, ...inheritedColors]}
                    />
                  )}
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        )}
        {section.subordinates?.map((company) => (
          <Accordion key={company.id} sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container>
                <Grid size={12}>
                  <UnitName unit={company} colors={inheritedColors} />
                </Grid>
              </Grid>
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
