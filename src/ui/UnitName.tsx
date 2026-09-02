import { Chip, Grid, Stack, Typography } from "@mui/material";
import { Unit } from "../entities/Unit.ts";

interface UnitNameProps {
  unit: Unit;
  colors?: (string | undefined)[];
}

export default function UnitName({ unit, colors }: UnitNameProps) {
  const shortName = unit.name.replaceAll(/[^A-Z]/g, "");
  const backgroundColor =
    unit.color ?? colors?.find((color) => color !== undefined);

  const icon = `/assets/nato_${unit.type}.svg`;

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
      spacing={2}
    >
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid
          size={"auto"}
          sx={{
            width: 60,
            height: 30,
            ...(backgroundColor && {
              backgroundColor,
            }),
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {unit.type && unit.type !== "hq" ? (
            <img src={icon} alt={unit.type} style={{ width: 60, height: 30 }} />
          ) : (
            shortName
          )}
        </Grid>
        <Grid>
          <Typography>{unit.name}</Typography>
        </Grid>
      </Grid>
      <Stack direction={"row"}>
        <Chip label={unit?.id} />
      </Stack>
    </Stack>
  );
}
