import { jsxs as d, jsx as r } from "react/jsx-runtime";
import f from "@mui/material/Box";
import b from "@mui/material/Typography";
import s from "@mui/material/Table";
import B from "@mui/material/TableHead";
import F from "@mui/material/TableBody";
import n from "@mui/material/TableRow";
import a from "@mui/material/TableCell";
function j({
  subData: i,
  subColumns: t,
  customContent: p,
  title: h,
  indent: c = 0
}) {
  return /* @__PURE__ */ d(
    f,
    {
      sx: {
        px: 2,
        py: 1.5,
        pl: 2 + c * 3,
        bgcolor: "#F5F9FF"
      },
      children: [
        h && /* @__PURE__ */ r(
          b,
          {
            variant: "subtitle2",
            fontWeight: "bold",
            sx: { pb: 1.5, color: "text.primary", fontSize: "0.875rem" },
            children: h
          }
        ),
        p,
        i && t && t.length > 0 && /* @__PURE__ */ d(s, { sx: { backgroundColor: "white" }, children: [
          /* @__PURE__ */ r(B, { children: /* @__PURE__ */ r(n, { children: t.map((e) => /* @__PURE__ */ r(
            a,
            {
              align: e.align ?? "left",
              sx: {
                fontWeight: 700,
                color: "text.secondary",
                width: e.width,
                backgroundColor: "#DBEAFE",
                borderBottom: "1px solid",
                borderColor: "#BFDBFE"
              },
              children: e.header
            },
            e.id
          )) }) }),
          /* @__PURE__ */ d(F, { children: [
            i.map((e, m) => /* @__PURE__ */ r(
              n,
              {
                sx: {
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                  "& td": { borderBottom: "1px solid", borderColor: "#BFDBFE" },
                  "&:last-child td": { borderBottom: 0 }
                },
                children: t.map((o) => {
                  const g = o.accessorKey ?? o.id, l = e[g], x = o.renderCell ? o.renderCell(l, e) : l != null ? String(l) : "—";
                  return /* @__PURE__ */ r(
                    a,
                    {
                      align: o.align ?? "left",
                      children: x
                    },
                    o.id
                  );
                })
              },
              m
            )),
            i.length === 0 && /* @__PURE__ */ r(n, { children: /* @__PURE__ */ r(
              a,
              {
                colSpan: t.length,
                align: "center",
                sx: { color: "text.disabled" },
                children: "אין נתונים"
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}
export {
  j as ExpandedRow
};
