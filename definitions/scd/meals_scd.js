const scd = require("dataform-scd");

scd("source_data_meals_scd", {
  uniqueKey: "meal_id",

  timestamp: "date",



  source: {
    schema: "raw",
    name: "meals"
  },
  columns: [
    "meal_id",
    "calories",
    "date"
  ],
  incrementalConfig: {
    bigquery: {
      partitionBy: "date"
    }
  }
});