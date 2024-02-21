import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../utils'

export class Kosis extends Model<InferAttributes<Kosis>, InferCreationAttributes<Kosis>> {
  TBL_NM: string;
  PRD_DE: string;
  TBL_ID: string;
  ITM_NM: string;
  ITM_NM_ENG: string;
  ITM_ID: string;
  ORG_ID: string;
  C1_OBJ_NM: string;
  C1_OBJ_NM_ENG: string;
  C2_OBJ_NM: string;
  C2_OBJ_NM_ENG: string;
  C3_OBJ_NM: string;
  C3_OBJ_NM_ENG: string;
  C4_OBJ_NM: string;
  C4_OBJ_NM_ENG: string;
  C5_OBJ_NM: string;
  C5_OBJ_NM_ENG: string;
  C6_OBJ_NM: string;
  C6_OBJ_NM_ENG: string;
  C7_OBJ_NM: string;
  C7_OBJ_NM_ENG: string;
  C8_OBJ_NM: string;
  C8_OBJ_NM_ENG: string;
  DT: string;
  PRD_SE: string;
  C1: string;
  C1_NM: string;
  C1_NM_ENG: string;
  C2: string;
  C2_NM: string;
  C2_NM_ENG: string;
  C3: string;
  C3_NM: string;
  C3_NM_ENG: string;
  C4: string;
  C4_NM: string;
  C4_NM_ENG: string;
  C5: string;
  C5_NM: string;
  C5_NM_ENG: string;
  C6: string;
  C6_NM: string;
  C6_NM_ENG: string;
  C7: string;
  C7_NM: string;
  C7_NM_ENG: string;
  C8: string;
  C8_NM: string;
  C8_NM_ENG: string;
}
/**
C1_OBJ_NM ~ C8_OBJ_NM	분류명1 ~ 분류명8
C1_OBJ_NM_ENG ~ C8_OBJ_NM_ENG	분류 영문명1 ~ 분류 영문명8
C1_NM ~ C8_NM	분류값 명1 ~ 분류값 명8
C1_NM_ENG ~ C8_NM_ENG
 */
Kosis.init({
  TBL_NM: {
    type: DataTypes.STRING(100)
  },
  PRD_DE: {
    type: DataTypes.STRING(20)
  },
  TBL_ID: {
    type: DataTypes.STRING(100)
  },
  ITM_NM: {
    type: DataTypes.STRING(100)
  },
  ITM_NM_ENG: {
    type: DataTypes.STRING(100)
  },
  ITM_ID: {
    type: DataTypes.STRING(100)
  },
  ORG_ID: {
    type: DataTypes.STRING(20)
  },
  C1_OBJ_NM: {
    type: DataTypes.STRING(100)
  },
  C1_OBJ_NM_ENG: {
    type: DataTypes.STRING(100)
  },
  C2_OBJ_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C2_OBJ_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C3_OBJ_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C3_OBJ_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C4_OBJ_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C4_OBJ_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C5_OBJ_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C5_OBJ_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C6_OBJ_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C6_OBJ_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C7_OBJ_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C7_OBJ_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C8_OBJ_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C8_OBJ_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  DT: {
    type: DataTypes.STRING(20)
  },
  PRD_SE: {
    type: DataTypes.STRING(20)
  },
  C1: {
    type: DataTypes.STRING(100)
  },
  C1_NM: {
    type: DataTypes.STRING(100)
  },
  C1_NM_ENG: {
    type: DataTypes.STRING(100)
  },
  C2: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C2_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C2_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C3: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C3_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C3_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C4: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C4_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C4_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C5: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C5_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C5_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C6: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C6_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C6_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C7: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C7_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C7_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C8: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C8_NM: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  C8_NM_ENG: {
    type: DataTypes.STRING(100),
    allowNull: true
  }  
}, {
  ...options
})

/**
[
  {
    "TBL_NM":"경기종합지수(2020＝100)(10차)",
    "PRD_DE":"202312",
    "TBL_ID":"DT_1C8015",
    "ITM_NM":"경기종합지수",
    "ITM_NM_ENG":"Composite Economic Indexes(2020＝100)",
    "ITM_ID":"T1",
    "ORG_ID":"101",
    "C1_OBJ_NM":"지수별",
    "C1_OBJ_NM_ENG":"By indicators",
    "DT":"98.6",
    "PRD_SE":"M",
    "C1":"B03",
    "C1_NM":"동행지수 순환변동치",
    "C1_NM_ENG":"Cyclical Component of Coincident Index"
  }
]
*/