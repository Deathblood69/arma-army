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
  Stack,
  Typography,
} from "@mui/material";
import { ExpandMore, Launch } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router";
import UnitName from "./UnitName.tsx";
import useArmy from "../hooks/useArmy.ts";

export default function ArmyOrg() {
  const navigate = useNavigate();

  const params = useParams();

  const { army, side } = useArmy(params.army);

  function handleClick(units: string[]) {
    const newPath = units.join("/").toLowerCase();
    navigate(newPath);
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid sx={{ width: "100%" }}>
        <Stack
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center", width: "100%" }}
        >
          <img
            src={`/assets/flag_${side}.png`}
            alt="NATO"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Typography variant="h4">{army.name}</Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        {army.subordinates?.map((brigade) => (
          <Accordion key={brigade.id} sx={{ p: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Grid container sx={{ width: "100%" }}>
                <Grid size={"auto"}>
                  <UnitName
                    unit={brigade}
                    colors={[brigade?.color, army.color]}
                  />
                </Grid>
              </Grid>
              <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
                <IconButton onClick={() => handleClick([brigade.id])}>
                  <Launch />
                </IconButton>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <List>
                <ListItem sx={{ border: "1px solid white" }}>
                  {brigade.commander && (
                    <UnitName
                      unit={brigade.commander}
                      colors={[brigade?.color, army.color]}
                    />
                  )}
                </ListItem>
              </List>
              <Grid container spacing={2} sx={{ pt: 2 }}>
                {brigade.subordinates?.map((battalion, index) => (
                  <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                    <Card sx={{ border: "1px solid white", height: "100%" }}>
                      <CardContent>
                        <Stack direction={"row"}>
                          <UnitName
                            unit={battalion}
                            colors={[brigade?.color, army.color]}
                          />

                          <IconButton
                            onClick={() =>
                              handleClick([brigade.id, battalion.id])
                            }
                          >
                            <Launch />
                          </IconButton>
                        </Stack>
                        <List>
                          {battalion.commander && (
                            <ListItem sx={{ pr: 0 }}>
                              <UnitName
                                unit={battalion.commander}
                                colors={[
                                  brigade?.color,
                                  battalion?.color,
                                  army.color,
                                ]}
                              />
                              <IconButton
                                onClick={() =>
                                  battalion.commander &&
                                  handleClick([brigade.id, battalion.id])
                                }
                              >
                                <Launch />
                              </IconButton>
                            </ListItem>
                          )}
                          {battalion.subordinates?.map((company, subIndex) => (
                            <ListItem key={subIndex} sx={{ pr: 0 }}>
                              <UnitName
                                unit={company}
                                colors={[
                                  company?.color,
                                  brigade?.color,
                                  battalion?.color,
                                  army.color,
                                ]}
                              />
                              <IconButton
                                onClick={() =>
                                  handleClick([
                                    brigade.id,
                                    battalion.id,
                                    company.id,
                                  ])
                                }
                              >
                                <Launch />
                              </IconButton>
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
