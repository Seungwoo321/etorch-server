import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../utils'

export class OECD extends Model<InferAttributes<OECD>, InferCreationAttributes<OECD>> {
  ref_area: string;
  value: number;
  freq: string;
  measure: string;
  unit_measure: string;
  activity: string;
  adjustment: string;
  transformation: string;
  time_horiz: string;
  methodology: string;
  time_period: string;
}

OECD.init({
  ref_area: {
    type: DataTypes.STRING(50)
  },
  value: {
    type: DataTypes.FLOAT
  },
  freq: {
    type: DataTypes.STRING(50)
  },
  measure: {
    type: DataTypes.STRING(100)
  },
  unit_measure: {
    type: DataTypes.STRING(50)
  },
  activity: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  adjustment: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  transformation: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  time_horiz: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  methodology: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  time_period: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  ...options,
  modelName: 'oecd'
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
