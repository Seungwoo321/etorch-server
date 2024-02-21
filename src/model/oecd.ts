import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../utils'

export class OECD extends Model<InferAttributes<OECD>, InferCreationAttributes<OECD>> {
  REF_AREA: string;
  value: number;
  FREQ: string;
  MEASURE: string;
  UNIT_MEASURE: string;
  ACTIVITY: string;
  ADJUSTMENT: string;
  TRANSFORMATION: string;
  TIME_HORIZ: string;
  METHODOLOGY: string;
  TIME_PERIOD: string;
}

OECD.init({
  REF_AREA: {
    type: DataTypes.STRING(50)
  },
  value: {
    type: DataTypes.FLOAT
  },
  FREQ: {
    type: DataTypes.STRING(50)
  },
  MEASURE: {
    type: DataTypes.STRING(100)
  },
  UNIT_MEASURE: {
    type: DataTypes.STRING(50)
  },
  ACTIVITY: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  ADJUSTMENT: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  TRANSFORMATION: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  TIME_HORIZ: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  METHODOLOGY: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  TIME_PERIOD: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  ...options
})

/**
[
  {
    REF_AREA: 'Korea',
    value: 99.97101,
    FREQ: 'Monthly',
    MEASURE: 'Composite leading indicator (CLI)',
    UNIT_MEASURE: 'Index',
    ACTIVITY: 'Not applicable',
    ADJUSTMENT: 'Amplitude adjusted',
    TRANSFORMATION: 'Index',
    TIME_HORIZ: 'Not applicable',
    METHODOLOGY: 'OECD harmonised',
    TIME_PERIOD: '2023-11'
  },
  {
    REF_AREA: 'Korea',
    value: 100.1254,
    FREQ: 'Monthly',
    MEASURE: 'Composite leading indicator (CLI)',
    UNIT_MEASURE: 'Index',
    ACTIVITY: 'Not applicable',
    ADJUSTMENT: 'Amplitude adjusted',
    TRANSFORMATION: 'Index',
    TIME_HORIZ: 'Not applicable',
    METHODOLOGY: 'OECD harmonised',
    TIME_PERIOD: '2023-12'
  },
  {
    REF_AREA: 'Korea',
    value: 100.2729,
    FREQ: 'Monthly',
    MEASURE: 'Composite leading indicator (CLI)',
    UNIT_MEASURE: 'Index',
    ACTIVITY: 'Not applicable',
    ADJUSTMENT: 'Amplitude adjusted',
    TRANSFORMATION: 'Index',
    TIME_HORIZ: 'Not applicable',
    METHODOLOGY: 'OECD harmonised',
    TIME_PERIOD: '2024-01'
  }
]
*/
