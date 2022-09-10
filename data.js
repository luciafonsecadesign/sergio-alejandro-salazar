var APP_DATA = {
  "scenes": [
    {
      "id": "0-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.015315439488510663,
        "pitch": 0.010821060256525072,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": -0.5943376020363402,
          "pitch": 0.07563557669469922,
          "rotation": 0,
          "target": "1-sala-de-estar-1"
        },
        {
          "yaw": 0.028646036517763207,
          "pitch": 0.059629782761291494,
          "rotation": 0,
          "target": "3-estudio-pasillo"
        },
        {
          "yaw": 0.5934409265155924,
          "pitch": 0.0630183122918968,
          "rotation": 0,
          "target": "2-sala-de-estar-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-de-estar-1",
      "name": "Sala de estar 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.7327122032767264,
        "pitch": 0.4087249297861799,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": 2.4749107013712255,
          "pitch": 0.2986713025591108,
          "rotation": 0,
          "target": "2-sala-de-estar-2"
        },
        {
          "yaw": -2.4864366038694925,
          "pitch": 0.2629551216909043,
          "rotation": 0,
          "target": "0-cocina"
        },
        {
          "yaw": 1.4549854325838574,
          "pitch": 0.1579765414108767,
          "rotation": 0,
          "target": "3-estudio-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala-de-estar-2",
      "name": "Sala de estar 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02679867776752154,
        "pitch": 0.4063411287402161,
        "fov": 1.4236357722889479
      },
      "linkHotspots": [
        {
          "yaw": -1.3990191089765016,
          "pitch": 0.23192598737734116,
          "rotation": 0,
          "target": "1-sala-de-estar-1"
        },
        {
          "yaw": -0.6558974979342587,
          "pitch": 0.14445479967211838,
          "rotation": 0,
          "target": "3-estudio-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-estudio-pasillo",
      "name": "Estudio pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.012797998680151,
          "pitch": 0.16272145672959404,
          "rotation": 0,
          "target": "4-alcoba-hija"
        },
        {
          "yaw": -3.0694868419776586,
          "pitch": 0.16663913196062552,
          "rotation": 0,
          "target": "5-estudio-ppal"
        },
        {
          "yaw": 1.6305695342669368,
          "pitch": 0.21212058451213878,
          "rotation": 0,
          "target": "6-alcoba-ppal"
        },
        {
          "yaw": -1.5254504415107277,
          "pitch": 0.030079356466536922,
          "rotation": 0,
          "target": "0-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-alcoba-hija",
      "name": "Alcoba hija",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7859123681241993,
          "pitch": 0.13500814583397514,
          "rotation": 0,
          "target": "3-estudio-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-estudio-ppal",
      "name": "Estudio ppal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5063860173060082,
          "pitch": 0.13788010045620602,
          "rotation": 0,
          "target": "3-estudio-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-alcoba-ppal",
      "name": "Alcoba ppal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5147466095367363,
          "pitch": 0.26982513069672365,
          "rotation": 0,
          "target": "3-estudio-pasillo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Sergio Alejandro Salazar",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
