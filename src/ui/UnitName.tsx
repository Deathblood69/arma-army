import { Stack, Typography } from '@mui/material'
import type { Unit } from '../data'

interface UnitNameProps {
  unit: Unit
  colors?: (string | undefined)[]
}

export default function UnitName({ unit, colors }: UnitNameProps) {
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
