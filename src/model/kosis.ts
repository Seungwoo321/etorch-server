import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { options } from '../utils'

export class Kosis extends Model<InferAttributes<Kosis>, InferCreationAttributes<Kosis>> {
  tbl_nm: string;
  prd_de: string;
  tbl_id: string;
  itm_nm: string;
  itm_nm_eng: string;
  itm_id: string;
  org_id: string;
  c1_obj_nm: string;
  c1_obj_nm_eng: string;
  c2_obj_nm: string;
  c2_obj_nm_eng: string;
  c3_obj_nm: string;
  c3_obj_nm_eng: string;
  c4_obj_nm: string;
  c4_obj_nm_eng: string;
  c5_obj_nm: string;
  c5_obj_nm_eng: string;
  c6_obj_nm: string;
  c6_obj_nm_eng: string;
  c7_obj_nm: string;
  c7_obj_nm_eng: string;
  c8_obj_nm: string;
  c8_obj_nm_eng: string;
  dt: string;
  prd_se: string;
  c1: string;
  c1_nm: string;
  c1_nm_eng: string;
  c2: string;
  c2_nm: string;
  c2_nm_eng: string;
  c3: string;
  c3_nm: string;
  c3_nm_eng: string;
  c4: string;
  c4_nm: string;
  c4_nm_eng: string;
  c5: string;
  c5_nm: string;
  c5_nm_eng: string;
  c6: string;
  c6_nm: string;
  c6_nm_eng: string;
  c7: string;
  c7_nm: string;
  c7_nm_eng: string;
  c8: string;
  c8_nm: string;
  c8_nm_eng: string;
}
/**
C1_OBJ_NM ~ C8_OBJ_NM	분류명1 ~ 분류명8
C1_OBJ_NM_ENG ~ C8_OBJ_NM_ENG	분류 영문명1 ~ 분류 영문명8
C1_NM ~ C8_NM	분류값 명1 ~ 분류값 명8
C1_NM_ENG ~ C8_NM_ENG
 */
Kosis.init({
  tbl_nm: {
    type: DataTypes.STRING(100)
  },
  prd_de: {
    type: DataTypes.STRING(20)
  },
  tbl_id: {
    type: DataTypes.STRING(100)
  },
  itm_nm: {
    type: DataTypes.STRING(100)
  },
  itm_nm_eng: {
    type: DataTypes.STRING(100)
  },
  itm_id: {
    type: DataTypes.STRING(100)
  },
  org_id: {
    type: DataTypes.STRING(20)
  },
  c1_obj_nm: {
    type: DataTypes.STRING(100)
  },
  c1_obj_nm_eng: {
    type: DataTypes.STRING(100)
  },
  c2_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c2_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c3_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c3_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c4_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c4_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c5_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c5_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c6_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c6_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c7_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c7_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c8_obj_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c8_obj_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  dt: {
    type: DataTypes.STRING(20)
  },
  prd_se: {
    type: DataTypes.STRING(20)
  },
  c1: {
    type: DataTypes.STRING(100)
  },
  c1_nm: {
    type: DataTypes.STRING(100)
  },
  c1_nm_eng: {
    type: DataTypes.STRING(100)
  },
  c2: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c2_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c2_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c3: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c3_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c3_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c4: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c4_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c4_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c5: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c5_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c5_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c6: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c6_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c6_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c7: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c7_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c7_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c8: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c8_nm: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  c8_nm_eng: {
    type: DataTypes.STRING(100),
    allowNull: true
  }  
}, {
  ...options,
  modelName: 'kosis'
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