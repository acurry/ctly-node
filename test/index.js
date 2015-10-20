import test from "tape"
import ctlyNode from "../"

test("ctlyNode", (t) => {
  t.plan(1)
  t.equal(true, ctlyNode(), "return true")
})
