/**
 * @openapi
 * /apiverify/{mail}:
 *   get:
 *     summary: Checks if an email already exists in the database
 *     parameters:
 *       - in: path
 *         name: mail
 *         required: true
 *         schema:
 *           type: string
 *           example: "user@example.com"
 *     responses:
 *       200:
 *         description: Email does not exist and is available
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "ok"
 *       404:
 *         description: Email already exists in the database
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "E-mail already exists"
 *       500:
 *         description: Server error
 */